
export default function sm2(quality, repetitions, previousInterval, previousEaseFactor) {
	var interval, repetitions, easeFactor;

	if (quality >= 3) {
		switch (repetitions) {
			case 0:
				interval = 1;
				break;

			case 1:
				interval = 6;
				break;

			default:
            	interval = Math.round(previousInterval * previousEaseFactor);
		}

		repetitions++;

		// magic numbers from SM-2 algorithm
		easeFactor = previousEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

	} else {
		repetitions = 0;
		interval = 1;
		easeFactor = previousEaseFactor;
	}
	
	// SM-2 algorithm doesn't allow easeFactor < 1.3
	if (easeFactor < 1.3) {
		easeFactor = 1.3;
	}

	return { interval, repetitions, easeFactor };
}
