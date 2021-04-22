---
---
var userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  os = null;

if (macosPlatforms.indexOf(platform) !== -1) {
  os = 'Mac OS';
} else if (iosPlatforms.indexOf(platform) !== -1) {
  os = 'iOS';
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  os = 'Windows';
} else if (/Android/.test(userAgent)) {
  os = 'Android';
} else if (!os && /Linux/.test(platform)) {
  os = 'Linux';
}

window.addEventListener("load", function(event) {
  var button = document.getElementById("download-button");
  var caption = document.getElementById("download-caption");
  if (os == "Mac OS") {
    document.getElementById("download-icon-macos").style.display = "inline";
    caption.innerHTML = "{{ site.os['macos'].caption }}";
  } else if (os == "Windows") {
    document.getElementById("download-icon-windows").style.display = "inline";
    caption.innerHTML  = "{{ site.os[windows].caption }}";
  } else {
    button.disabled = true;
  }

  document.querySelector("#download-button").addEventListener('click', function(event) {
    if (os == "Mac OS") {
      window.open("{{ site.os['macos'].url }}");
    } else if (os == "Windows") {
      window.open("{{ site.os['windows'].url }}");
    }
  });

  document.querySelector("#anydesk-button").addEventListener('click', function(event) {
    var button = document.getElementById("anydesk-button");
    if (os == "Mac OS") {
      window.open("https://get.anydesk.com/{{ site.os['macos'].anydesk }}/AnyDesk_Custom_Client.dmg");
    } else if (os == "Windows") {
      window.open("https://get.anydesk.com/{{ site.os['windows'].anydesk }}/AnyDesk_Custom_Client.exe");
    } else {
      window.open( "https://anydesk.com/download");
    }
  });
});
