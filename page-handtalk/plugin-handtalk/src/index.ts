function getDeviceInfo(): { device: string; os: string } {
  const userAgent = navigator.userAgent;
  let device = 'Desktop';
  let os = 'Unknown';

  if (/Android/i.test(userAgent)) {
    device = 'Android';
    os = 'Android';
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    device = 'iOS';
    os = 'iOS';
  } else if (/Mac OS X/i.test(userAgent)) {
    os = 'Mac OS X';
  } else if (/Windows/i.test(userAgent)) {
    os = 'Windows';
  } else if (/Linux/i.test(userAgent)) {
    os = 'Linux';
  }

  return { device, os };
}

function getOrigin(): string {
  return window.location.hostname;
}

let themeChangeCount = 0;

function themeChanged() {
  themeChangeCount++;
}

function extractData() {
  const { device, os } = getDeviceInfo();
  const origin = getOrigin();

  return {
    device,
    os,
    origin,
    themeChangeCount,
  };
}

export { extractData, themeChanged };