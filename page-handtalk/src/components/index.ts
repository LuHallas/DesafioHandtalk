// src/index.ts

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

  console.log(device,os,origin,themeChangeCount)
  return {
    device,
    os,
    origin,
    themeChangeCount,
  };
}

const button = document.createElement('button');
button.textContent = 'Extrair Dados';
button.style.position = 'fixed';
button.style.top = '20px';
button.style.left= '20px';
button.style.zIndex = '1000';

document.body.appendChild(button);

button.addEventListener('click', async () => {
  const data = extractData();

  try {
    const response = await fetch('http://localhost:5000/collect', { // Substitua pela URL da sua API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '71c62986-2640-4e96-a7a6-95f6195bb226', // Substitua pelo token do domínio
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Dados enviados para a API com sucesso!');
      // Exibir feedback de sucesso ao usuário (ex: alert, modal, etc.)
      alert('Dados enviados com sucesso!');
    } else {
      console.error('Erro ao enviar os dados para a API:', response.status);
      // Exibir feedback de erro ao usuário
      alert('Erro ao enviar os dados!');
    }
  } catch (error) {
    console.error('Erro ao enviar os dados para a API:', error);
    // Exibir feedback de erro ao usuário
    alert('Erro ao enviar os dados!');
  }
});

export { extractData, themeChanged };
