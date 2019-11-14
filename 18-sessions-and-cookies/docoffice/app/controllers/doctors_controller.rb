class DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :edit, :update]
  before_action :authorized, except: [:index]
  
  def index
    @doctors = Doctor.all
  end

  def show
    # byebug
    # if @doctor == nil
    #   redirect_to doctors_path
    # end
  end

  def new
    @doctor = Doctor.new
  end

  def create
    doc = Doctor.new(doctor_params)
    if doc.valid?
      doc.save
      redirect_to doc and return
    else
      flash[:errors] ||= []
      flash[:errors] = doc.errors.full_messages
      redirect_to new_doctor_path and return
    end
    redirect_to doctors_path
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