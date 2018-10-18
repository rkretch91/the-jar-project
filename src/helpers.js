export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
  const fears = ['Wear the strangest outfit from your wardrobe in the streets', 'Talk to 5 strangers today', 'Stay up and stare at the stars for 30 mins', 'Purchase tickets (airplane, bus, train) to somewhere you have never gone before', 'Donate $10 to a cause of your desire', 'Smile at 5 people', 'Hug 5 random people', 'Call your father', 'Call one of your siblings', 'Dance to your favorite song and scream the lyrics outloud', 'Smile and look at 5 people in the eyes', 'Buy a coffee for the person behind you in line', 'Sign up to volunteer at an event...today', 'Give someone you barely know a hug', 'Take your camera out and photograph the world for 1 hour', 'Sign up to volunteer somewhere for 1 hour (if not today, this week)', 'Make cookies for a neighbor', 'Sign up for an event/go to a networking event', 'Send in an appication for something (a job, university, other program)', 'Talk to a stranger for 10 minutes', 'Surprise someone with a special treat',
  'Spend 30 minutes learning a new language', 'Draw or paint for 1 hour', 'Begin learning a new skill', 'Call someone you are nervous to make a call to', 'Go to a networking event', 'Flirt with someone', 'Talk to 5 random strangers', 'Ask the nearest person to you at this moment for something', 'Tell someone they are pretty/handsome', 'Find one inspiring person and call or write them', 'Turn off your phone for the whole day (or if impossible, then once this week', 'Call a childhood friend'];

  const generatedMessage = `${rando(fears)}`
  return generatedMessage;
}
