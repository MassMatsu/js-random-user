export const formatDOB = (date) => {
  let dobArray = [...date].slice(0, 10).filter((letter) => letter !== '-')

  const dob = `${dobArray[6]}${dobArray[7]} / ${dobArray[4]}${dobArray[5]} / ${dobArray[0]}${dobArray[1]}${dobArray[2]}${dobArray[3]}`;

  return dob
}

formatDOB('1981-01-31T22:43:17.154Z')