import React, { useEffect, useRef } from 'react';
const pluginScript = require('raw-loader!../../../plugin-handtalk/dist/plugin.js');
import { extractData } from '../../plugin-handtalk/src/index';

const PluginComponent: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const injectButton = () => {
      if (buttonRef.current) {
        // Crie o botão
        const button = document.createElement('button');
        button.textContent = 'Extrair Dados';
        button.style.position = 'fixed';
        button.style.top = '20px';
        button.style.right = '20px';
        button.style.zIndex = '1000';

        // Adicione o botão ao elemento alvo
        buttonRef.current.appendChild(button);

        // Adicione o event listener ao botão
        button.addEventListener('click', async () => {
          const data = extractData();
          console.log('Dados extraídos:', data);

          try {
            const response = await fetch('http://localhost:5000/collect', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': '71c62986-2640-4e96-a7a6-95f6195bb226', // Substitua pelo token correto
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              console.log('Dados enviados para a API com sucesso!');
              alert('Dados enviados com sucesso!');
            } else {
              console.error('Erro ao enviar os dados para a API:', response.status);
              alert('Erro ao enviar os dados!');
            }
          } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
            alert('Erro ao enviar os dados!');
          }
        });
      } else {
        console.error('Elemento alvo não encontrado!');
      }
    };

    // Injete o script do plugin
    const script = document.createElement('script');
    script.textContent = pluginScript;
    document.body.appendChild(script);
    script.onload = injectButton;

    // Remova o script ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={buttonRef}></div>
  );
};

export default PluginComponent;