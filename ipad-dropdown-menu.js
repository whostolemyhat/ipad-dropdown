
    if(pm.touchDevice) {
      // show dropdowns on ipad but don't follow top-level links (marinas, berthing) until second click
      // otherwise can't ever see/click on dropdown
      function touchClick(e) {
        // stop click
        e.preventDefault();
        // rebind event to other links since the list has changed (removed current link and added old open link)
        $('.primaryWithNav.touch').removeClass('touch').find('> a').bind('click', touchClick);
        // remove the touchClick event from this link and add class to show dropdown
        $(this).unbind('click').parent().addClass('touch');
      }
      // bind top-level links
      $('.primaryWithNav > a').not('.primaryWithNav.touch > a').click(touchClick);
      // clear dropdown when clicking outside nav
      $('html').click(function() {
        $('.primaryWithNav.touch').removeClass('touch').find('> a').bind('click', touchClick);
      });
      // make sure links still function but don't hide dropdown
      $('#mainNav').click(function(e) {
        e.stopPropagation();
      });

    }