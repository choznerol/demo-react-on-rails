class ClassroomController < ApplicationController
  layout "classroom"

  def lectures
    @lectures = Lecture.with_attached_coverImage.map do |lecture|
      {
        id: "#{lecture.id}",
        title: lecture.title,
        coverImageUrl: url_for(lecture.coverImage),
        path: "/classroom/lectures/#{lecture.id}",
      }
    end

    @classroom_props = {
      title: "Classroom for 2B",
      lectures: @lectures,
      activeLectureId: params[:id],
    }
  end
end
