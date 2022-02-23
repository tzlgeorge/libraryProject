# libraryProject

##### This is a library containing functions that are useful for checking information regarding incarceration in each US state.
#
##### The function `getStateIncar()` returns the total adults in correctional facilities in a given state. 
###### @param state {string} - the full name of a state for which to check the total number of incarcerated.
###### @return {number} - the number of total adults in correctional facilities in the given state.
##### `function getStateIncar(state)`
#
##### The function `incarRateRank()` returns the list of 53 regions (including United States average) in the order of highest to lowest incarceration rate.
###### @return {object} - the list of regions in the order of highest to lowest incarceration rate.
##### `function incarRateRank()`
#
##### The function `compareIncarRate()` compares the incarceration rate of two given states/regions.
###### @param state1 {string} - the full name of a state/region that will be compared
###### @param state2 {string} - the full name of a state/region that will be compared
###### @return {string} - the name of the state/region between the two that have a higher incarceration rate.
##### `function compareIncarRate(state1, state2)`
#
##### The function `populationDistribution()` describes the distribution of population with different racial profile in a given state/region.
###### @param state {string} - the full name of a state/region whose demographic distribution will be determined
###### @return {string} - a string of text describing the total population and the percentage of population with different racial profile in the given state/region.
##### `function populationDistribution(state)`
#
##### The function `populationRank()` returns a list of 52 regions (excluding the United States total) in the order of highest to lowest population in that region. 
###### @return {object} - the list of regions in the order of highest to lowest population.
##### `function populationRank()`
