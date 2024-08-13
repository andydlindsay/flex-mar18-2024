# keys in objects are private by default, readable, writable, or readable and writable

class Animal
  def initialize(species, name)
    @species = species
    @name = name
  end
end

class Dog < Animal
  def initialize(name)
    super('dog', name)
  end
end

dog = Dog.new('benji')
p dog

class Car
  def initialize(make, model, year)
    @make = make # instance variable
    @model = model
    @year = year
  end

  # attr_reader(:model)
  # attr_writer(:model)
  attr_accessor(:year, :make, :model)

  # getter
  # def make()
  #   @make
  # end

  # setter
  # def make=(new_make)
  #   @make = new_make
  # end
end

# const car = new Car()
car = Car.new('Toyota', 'Tercel', 1986)

p car
puts car.make
car.make = 'Dodge'

p car
puts car.model
car.model = 'Grand Caravan'

p car
puts car.year
car.year = 2011

p car
