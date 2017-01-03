"use strict";

export default function sm2(quality, counter, previousInterval, previousEaseFactor){
	var interval, counter, easeFactor;

	if(quality >= 3){
		switch(counter){
			case 0:
				interval = 1;
				break;
			case 1:
				interval = 6;
				break;
			default:
				// non-recursive interval function from SuperMemo2 implementation of SM-2
            	interval = Math.round(previousInterval * previousEaseFactor);
		}
		counter++;

		// magic numbers from SM-2 algorithm
		easeFactor = previousEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality ) * 0.02));
	} else{
		counter = 0;
		interval = 1;
		easeFactor = previousEaseFactor;
	}
	
	// SM-2 algorithm doesn't allow easeFactor < 1.3
	if(easeFactor < 1.3){
		easeFactor = 1.3;
	}

	return { interval, counter, easeFactor };
}
