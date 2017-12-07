#!/usr/bin/env r

# Take a subset of the currently very LARGE sample size
# We need to get an accurate representation of our current sample
# while maintaining a size that can be usable in D3 and on Github

Input <- {{In1}}
Output <- {{Out1}}

data <- read.csv(Input)
sigma <- sd(data$shannon_entropy)
e <- .05
n <- floor((((1.96) * sigma)/e)^2)
s <- sample(data$shannon_entropy, n)
d <- sample(data$date, n)
df <- paste(d, s, sep=",")
write.table(df, Output)

Input <- {{In2}}
Output <- {{Out2}}

data <- read.csv(Input)
log_data <- log(data$logbase2_entropy)
sigma <- sd(log_data)
e <- .06
n <- floor((((1.96) * sigma)/e)^2)
s <- sample(log_data, n)
d <- sample(data$date, n)
df <- paste(d, s, sep=",")
write.table(df, Output)
