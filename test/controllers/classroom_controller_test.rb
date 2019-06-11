require 'test_helper'

class ClassroomControllerTest < ActionDispatch::IntegrationTest
  test "should get lectures" do
    get classroom_lectures_url
    assert_response :success
  end

end
