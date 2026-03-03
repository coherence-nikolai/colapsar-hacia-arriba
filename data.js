// =====================================
// COLLAPSE ↑ — DATA (ES5 SAFE)
// =====================================

var TRANSLATIONS = {
  en: {
    fieldLine: "These versions of you exist right now.",
    fieldSub: "All equally real. All waiting for observation.",
    cLabel: "You just collapsed upward ↑",
    cSub: "The observer has spoken. The field has responded.",
    ceqNote: "your observation just made this real",
    imagLabel: "before you breathe — find it in yourself.",
    qLabel: "carry this into the next hour",
    retBtn: "observe again ↑",
    stillTxt: "The field is full.\nPresence is enough.",
    stillBack: "return to field",
    tapHint: "tap to continue",
    tapHintLast: "tap to begin",
    readyBtn: "I am ready to observe",

    obsCount: function(n) {
      if (n > 0) {
        return "You have consciously observed " + n + " time" + (n !== 1 ? "s" : "") + ".";
      }
      return "";
    },

    obsFirst: function(s) {
      return "You have observed " + s +
        " for the first time.\nThe wave function just found a new direction.";
    },

    obsMany: function(s, n) {
      return "You have observed " + s +
        " " + n + " times.\nThis collapse is becoming familiar.\nAt some point — it will simply be you.";
    },

    closings: [
      "Go collapse something beautiful.",
      "The field remembers nothing. You remember everything.",
      "What you observed just became more real.",
      "The experiment continues whether you are watching or not.",
      "You were always this. Now you know.",
      "Collapse upward. Again. Always."
    ],

    entanglements: [
      "The people around you are measuring you right now. Choose your field carefully.",
      "Every environment you inhabit is an observer. New spaces create new you.",
      "You are never collapsing alone. But you are responsible for your vector."
    ]
  },

  es: {
    fieldLine: "Estas versiones de ti existen ahora mismo.",
    fieldSub: "Todas igualmente reales. Todas esperando observación.",
    cLabel: "Acabas de colapsar hacia arriba ↑",
    cSub: "El observador ha hablado. El campo ha respondido.",
    ceqNote: "tu observación acaba de hacer esto real",
    imagLabel: "antes de respirar — encuéntralo en ti.",
    qLabel: "lleva esto a la próxima hora",
    retBtn: "observar otra vez ↑",
    stillTxt: "El campo está lleno.\nLa presencia es suficiente.",
    stillBack: "volver al campo",
    tapHint: "toca para continuar",
    tapHintLast: "toca para comenzar",
    readyBtn: "Estoy listo para observar",

    obsCount: function(n) {
      if (n > 0) {
        return "Has observado conscientemente " + n + " vez" + (n !== 1 ? "es" : "") + ".";
      }
      return "";
    },

    obsFirst: function(s) {
      return "Has observado " + s +
        " por primera vez.\nLa función de onda acaba de encontrar una nueva dirección.";
    },

    obsMany: function(s, n) {
      return "Has observado " + s +
        " " + n + " veces.\nEste colapso se está volviendo familiar.\nEn algún momento — simplemente serás tú.";
    },

    closings: [
      "Ve a colapsar algo hermoso.",
      "El campo no recuerda nada. Tú lo recuerdas todo.",
      "Lo que observaste se volvió más real.",
      "El experimento continúa aunque no estés mirando.",
      "Siempre fuiste esto. Ahora lo sabes.",
      "Colapsa hacia arriba. Otra vez. Siempre."
    ],

    entanglements: [
      "Las personas a tu alrededor te están midiendo ahora mismo. Elige bien tu campo.",
      "Cada entorno que habitas es un observador. Nuevos espacios crean nuevos tú.",
      "Nunca colapsas solo. Pero eres responsable de tu dirección."
    ]
  }
};
