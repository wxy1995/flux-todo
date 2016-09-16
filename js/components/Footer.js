// Footer

var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoAction');

var Footer = React.createClass({

	propTypes: {
		allTodos: ReactPropTypes.object.isRequired
	},

	render: function () {
		var allTodos = this.props.allTodos;
		var total = Object.keys(allTodos).length;

		if (total === 0) {
			return null;
		}

		var completed = 0;
		for (var key in allTodos) {
			if (allTodos[key].complete) {
				completed++;
			}
		}

		var itemsLeft = total - completed;
		var itemsLeftPhrase = itemsLeft === 1 ? ' item' : ' items';
		itemsLeftPhrase += ' left';

		var clearCompletedButton;
		if (completed) {
			clearCompletedButton = 
				<button id="clear-completed" onClick={this._onClearCompletedClick}>
					Clear completed ({completed})
				</button>;
		}

		return (
			<footer className="footer">
				<span id="todo-count">
					<strong>{itemsLeft}</strong>
					{itemsLeftPhrase}
				</span>
				{clearCompletedButton}
			</footer>
		);
	},

	_onClearCompletedClick: function () {
		TodoActions.destroyCompleted();
	}
});

module.exports = Footer;