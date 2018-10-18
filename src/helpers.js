export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
  const fears = ['Wear the strangest outfit from your wardrobe in the streets', 'Talk to 5 strangers today', 'Stay up and stare at the stars for 30 mins', 'Purchase tickets (airplane, bus, train) to somewhere you have never gone before', 'Donate $10 to a cause of your desire', 'Smile at 5 people'];

  const generatedMessage = `${rando(fears)}`
  return generatedMessage;
}
