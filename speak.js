const audio = document.getElementById('audio');

    // Essayer de jouer (la promesse peut être rejetée si autoplay est bloqué)
    audio.play().catch(err => {
      console.log('Autoplay bloqué :', err);
      // Montrer un bouton pour que l'utilisateur déclenche la lecture
      const btn = document.createElement('button');
      btn.textContent = 'Lire l\'audio';
      btn.onclick = () => audio.play();
      document.body.appendChild(btn);
    });
 
