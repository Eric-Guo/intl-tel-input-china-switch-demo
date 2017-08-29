require 'application_system_test_case'

class HomeTest < ApplicationSystemTestCase
  test 'loads correctly' do
    visit '/'
    assert page.has_content?('Example: Modify country data')
    find(:css, '.flag-container').click
    assert page.has_content?('United Kingdom')
  end
end
