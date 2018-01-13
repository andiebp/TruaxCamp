import React, { Component } from 'react';
import Donate from './components/Donate';
import Footer from './components/Footer';
import Icon from './components/Icon';
import Logo from './components/Logo';
import Modal from 'react-modal';
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import Parallax from './components/Parallax';
import Quote from './components/Quote';
import Registration from './components/Modal.js'

class App extends Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal() {
		this.setState({modalIsOpen: true});
	}
	closeModal() {
		this.setState({modalIsOpen: false});
	}
	render() {
		const { modalIsOpen } = this.state;
		return (
			<div>
				{/*<Navbar /> */}
				<Parallax bg="1">
					<Logo />
				</Parallax>
				<Panel>
					<Icon icon="album" title="Our Mission" desc="Creating a lifelong desire to learn, listen and perform music." />
					<Icon icon="audiotrack" title="Truax Troubadours" desc="Join this select group of performers. Auditions coming soon!" />
					<Icon icon="insert_invitation" title="Save the Date" desc="2018 summer camp will be held from June 18th - 23rd in Dallas, Texas." click={this.openModal} />
				</Panel>
				<Parallax bg="2">
					<Quote author="Plato">"Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything."</Quote>
				</Parallax>
				<Donate>Truax School of Trumpet is a 501(c)3 organization. Your contributions fund scholarships that provide opportunities for students to learn, listen and perform at camp and throughout the year.</Donate>
				<Quote author="Bono">"Music can change the world because it can change people."</Quote>
				<Footer email="truaxtrumpets@gmail.com" site="berttruax.net">
					Bert Truax was raised in the San Francisco bay area and began studying trumpet at the age of seven.He performed as a soloist with the San Francisco Symphony at the age of 13, performing The Carnival of Venice.In 1976, during his senior year at the Curtis Institute of Music in Philadelphia, he won the position of Second Trumpet with the Dallas Symphony, a position he held for 23 years. He held a year - long appointment as Second Trumpet with the Philadelphia Orchestra during their 1985 season. Currently he is Principal Trumpet of the Lewisville Symphony, Second Trumpet with the East Texas Symphony,and regularly performs as a top freelancer in the Dallas - Fort Worth metro area.A master teacher, his former teachers include Joseph Alessi Sr., Bill Adam, James Stamp,and Gilbert Johnson. Bert has held professorships at SMU, UNT, Texas A & M Commerce, as well as maintaining a successful private studio. As a composer, Mr.Truax has been commissioned by the Dallas Symphony, the Dallas Bach Society, New York Philharmonic Principal Trombone, Joe Alessi, and the Military Academy at West Point. Mr.Truax is an S.E.Shires Performing Artist.
				</Footer>
				<Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} ariaHideApp={false}>
					<button onClick={this.closeModal} className="right btn-floating waves-effect waves-light amber z-depth-4"><i className="material-icons">cancel</i></button>
					<h4 className="center amber-text light">Camp Registration Form</h4>
					<Registration />
				</Modal>
			</div>
		);
	}
}

export default App;
