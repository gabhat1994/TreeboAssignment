import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';
import Toggle from '../components/Toggle';
import '../styles/app.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/theme';
import { GlobalStyles } from '../components/global';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme : this.toggleTheme
        }
        this.toggleTheme = this.toggleTheme.bind(this)
      }

      componentDidMount(){
          this.props.actions.fetchTrendingGifs()
      }


  


    toggleTheme(){
    if (this.state.theme === 'light') {
      this.setState({theme : 'dark'});
    // otherwise, it should be light
    } else {
        this.setState({theme : 'light'});
    }
  }
    render() {
        console.log(this.state,"this.state")
        const themeMode = this.state.theme === 'light' ? lightTheme : darkTheme;
        return (
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />

               <div style={{float : "right"}}>Toogle theme ; <Toggle theme={this.state.theme} toggleTheme={this.toggleTheme} /></div>
               
                <GifList gifs={ this.props.gifs } onGifSelect={ selectedGif => this.props.actions.openModal({selectedGif}) } />
                <GifModal modalIsOpen={ this.props.modalIsOpen }
                          selectedGif={ this.props.selectedGif }
                          onRequestClose={ () => this.props.actions.closeModal() } />
            </ThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        gifs: state.gifs.trendingData,
        modalIsOpen: state.modal.modalIsOpen,
        selectedGif: state.modal.selectedGif
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);