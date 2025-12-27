const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance("Bienvenu, Je suis heureuse que vous soyer ici. Si vous êtes en train de lire ces lignes c'est peut être que quelque chose en wous cherche du sens, de la paix, ou simplement un espace pour souffler,déposer et repartir plus léger.");
synth.speak(utterance);
utterance.rate = 1.2; // Vitesse de la parole
utterance.pitch = 50; // Hauteur de la voix
utterance.volume = 100; // Volume sonore
synth.speak(utterance);

const utterance2 =new SpeechSynthesisUtterance("")
synth.speak(utterance2);
utterance2.rate = 1.2; // Vitesse de la parole
utterance2.pitch = 50; // Hauteur de la voix
utterance2.volume = 100; // Volume sonore
synth.speak(utterance2);