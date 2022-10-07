const movingAverage = (x, m) => {
  return x
    .slice(m, -m)
    .map((_, i) => x
      .slice(i, i + m)
      .reduce((a, b) => parseFloat(a) + parseFloat(b)) / m
    )
}

export default movingAverage