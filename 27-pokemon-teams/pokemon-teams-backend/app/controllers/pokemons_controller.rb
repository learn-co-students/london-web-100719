class PokemonsController < ApplicationController

    def index
        render json: Pokemon.all
    end

    def show
        render json: Pokemon.find(params[:id])
    end

    def create
        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        
        pokemon = Pokemon.create(nickname: name, species: species, trainer_id: pokemon_params[:trainer_id])
        render json: pokemon
    end

    def destroy
        pokemon = Pokemon.find(params[:id])
        pokemon.destroy
        render json: pokemon
    end

    private

    def pokemon_params
        params.permit(:trainer_id)
    end
end
