require 'application_system_test_case'

class HomeTest < ApplicationSystemTestCase
  test 'loads correctly' do
    visit '/'
    assert page.has_content?('Example: Modify country data')
  end
end
