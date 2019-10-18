class PetsController < ApplicationController
  before_action :authorize_user, except: [:index, :show]
  before_action :check_pet_belongs_to_user, only: [:edit, :update, :destroy]
  before_action :find_pet, only: [:show, :edit, :update, :destroy]

  def index
    @pets = Pet.all
  end

  def show
  end

  def new
    @pet = Pet.new
  end

  def edit
  end

  def create
    # Create pet here.
    @pet = Pet.new(pet_params)
    @pet.user = current_user
    @pet.save
    if @pet.valid?
      redirect_to pets_path
    else
      render :new
    end
  end

  def update
    # Update pet here.
    @pet.update(pet_params)
    redirect_to pet_path(@pet.id)
  end

  def destroy
    Pet.destroy(params[:id])
    redirect_to pets_path
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :age)
  end

  def check_pet_belongs_to_user
    unless Pet.find(params[:id]).user == current_user
      flash[:notice] = "Please leave other people's pets alone :("
      redirect_to pets_path
    end
  end

  def find_pet
    @pet = Pet.find(params[:id])
  end

end
