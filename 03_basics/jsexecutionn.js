/*
Javascript Execution Context

=> Global Execution Context
=> Function execution Context
=> Eval execution Context


{}
-> Memory Creation Phase
-> Execution Phase

Step1: Global Execution => this

Step2: Memory Phase  => undefined

Step3: Execution Phase  => val1 <- 10; val2 <- 20; addNum -> [new variable env + Execution thread]

Again step1 and step2 for addNum  => when execution context is created -> [new variable env + Execution thread] is deleted

Again steps are repeated accordingly


 */
