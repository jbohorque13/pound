export const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
}

export const getHashRandom = () => {
  return Math.random().toString(36).substring(2,7) + 'bzaK9eMx3l2x1RyUEy5kd8LH22Q9I';
}

export const getAddressRandom = () => {
  return Math.random().toString(36).substring(2,7) + '52ea6afa6857ecaee659a72845ce7d216a81bef2d7272107a14dac79e6a';
}
