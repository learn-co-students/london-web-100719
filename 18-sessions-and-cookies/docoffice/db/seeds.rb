puts 'running the seeds file'

puts 'deleting doctors'
Doctor.destroy_all
puts 'deleting patients'
Patient.destroy_all
puts 'all models cleared '

doctors = [
  {name:'dre' , skillz: 'beats'},
  {name:'mario' , skillz: 'plumbing'}
]

patients = [
  {name:'john', condition: 'bad feet'},
  {name:'jack', condition: 'bad head'},
  {name:'jill', condition: 'bad'},
  {name:'rhonda', condition: 'yikes'}
]

puts 'creating doctors'
Doctor.create doctors
puts 'creating patients'
Patient.create patients
puts 'all models created '

puts 'bai'
