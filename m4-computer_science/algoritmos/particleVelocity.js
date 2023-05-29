function particleVelocity(particles) {
  let count = 0;
  let totalPeriods = 0;

  for (let i = 0; i + 2 < particles.length; i += 1) {
    if (particles[i + 1] - particles[i] === particles[i + 2] - particles[i + 1]) {
      count += 1;
      totalPeriods += count;
    } else {
      count = 0;
    }
  }
  
  return totalPeriods < 1000000000 ? totalPeriods : -1;
}