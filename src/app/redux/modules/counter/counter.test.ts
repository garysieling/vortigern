import { expect } from 'chai';
import { fetchMock, mockStore } from '../../../helpers/TestHelper.tsx';
import * as counter from './counter';
import { ICounter, ICounterAction } from './counter.model';

/** Module */
describe('Counter Module', () => {

	/** Actions */
	describe('Actions', () => {
		describe('Increment', () => {
			it('has the correct type', () => {
				const action: ICounterAction = counter.increment();
				expect(action.type).to.equal(counter.INCREMENT);
			});
		});

		describe('Decrement', () => {
			it('has the correct type', () => {
				const action: ICounterAction = counter.decrement();
				expect(action.type).to.equal(counter.DECREMENT);
			});
		});
	});

	/** Reducer */
	describe('Reducer', () => {

		let state: ICounter = { count: 10 };

		it('handles action of type INCREMENT', () => {
			const action: ICounterAction = { type: counter.INCREMENT };
			expect(counter.counterReducer(state, action)).to.be.eql({ count: state.count + 1 });
		});

		it('handles action of type DECREMENT', () => {
			const action: ICounterAction = { type: counter.DECREMENT };
			expect(counter.counterReducer(state, action)).to.be.eql({ count: state.count - 1 });
		});

		it('handles actions with unknown type', function() {
			expect(counter.counterReducer(state, { type: '' })).to.be.eql({ count: state.count });
		});

	});

});
