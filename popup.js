document.addEventListener('DOMContentLoaded', function () {
  const thoughts = [
    "Believe in yourself and all that you are.",
    "Every day is a new beginning.",
    "Dream big, work hard, stay focused.",
    "You are stronger than you think.",
    "Positivity always wins.",
    "Embrace the glorious mess that you are.",
    "Do something today that your future self will thank you for.",
    "Happiness is not by chance, but by choice.",
    "Start each day with a grateful heart.",
    "Believe you can and you're halfway there.",
    "The best time for new beginnings is now.",
    "Do what you love and the money will follow.",
    "Stay close to anything that makes you glad you are alive.",
    "Be the change that you wish to see in the world.",
    "Doubt kills more dreams than failure ever will.",
    "Your only limit is your mind.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
    "Stay positive, work hard, make it happen.",
    "You are capable of amazing things.",
    "Believe in the power of yet.",
    "You are what you do, not what you say you'll do.",
    "Good things take time.",
    "Inhale confidence, exhale doubt.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Make today so awesome that yesterday gets jealous.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "The best way to predict the future is to create it.",
    "Your vibe attracts your tribe.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Turn your wounds into wisdom.",
  ];

  // Function to get a daily quote
  function getDailyQuote() {
  const index = Math.floor(Math.random() * 31);
  return thoughts[index];
}

  // Display the quote in the popup
  document.getElementById('thought').textContent = getDailyQuote();
});