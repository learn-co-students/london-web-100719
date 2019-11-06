class PatientsController < ApplicationController
  def index
    @patients = Patient.all
  end
  
  def show
    @patient = Patient.find(params[:id])
  end

  def new
    @patient = Patient.new
    @doctors = Doctor.all
  end

  def create
    patient = Patient.create(patient_params)
    redirect_to patient_path(patient)
  end

  private

  def patient_params
    params.require(:patient).permit(:name, :condition, :doctor_id)
  end

end