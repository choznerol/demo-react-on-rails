class ClassroomController < ApplicationController
  layout "classroom"

  def lectures
    @classroom_props = { title: "Classroom for 2B" }
  end
end
