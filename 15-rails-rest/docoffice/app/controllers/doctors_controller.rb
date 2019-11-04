class DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :edit, :update]

  def index
    @doctors = Doctor.all
  end

  def show
  end

  def new
    @doctor = Doctor.new
  end

  def create
    doc = Doctor.create(doctor_params)
    redirect_to doc
  end

  def edit
  end
  
  def update
    # doctor.update(params)
  end
  
  def delete
    doctor = Doctor.find(params[:id])
    doctor.destroy
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :skillz)
  end

  def set_doctor
    @doctor = Doctor.find(params[:id])
  end
end