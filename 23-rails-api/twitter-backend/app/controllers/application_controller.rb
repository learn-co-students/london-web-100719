class ApplicationController < ActionController::API

    def everything
        render json: { 
            planets: PlanetSerializer.all,
            people: Person.all.map{|p| PersonSerializer.new(p)},
            users: User.all,
            tweets: Tweet.all
        }
    end
end
