require 'rspotify'

class User < ActiveRecord::Base
  devise :database_authenticatable

  dragonfly_accessor :image

  has_many :contributions
  has_many :mixtapes, through: :contributions
  has_many :owned_mixtapes, class_name: 'Mixtape', foreign_key: 'owner_id'

  def spotify_user
    RSpotify::User.new(JSON.parse(spotify_hash))
  end

  def avatar_url
    image.try(:url) || Faker::Avatar.image
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.display_name
      user.spotify_hash = auth.to_json
    end
  end

  def contributes?(mixtape)
    Contribution.where(user: self, mixtape: mixtape).first
  end

end
