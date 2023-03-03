import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GuessingGame = () => {
  // State variables
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [rounds, setRounds] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [guessesFeedback, setGuessesFeedback] = useState([]);

  // Function to handle guess input
  const handleGuessInput = (inputValue) => setGuess(inputValue);

  // Function to handle guess submission
  const handleGuessSubmission = () => {
    const guessedNumber = parseInt(guess);
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      setFeedback('Please enter a valid number between 1 and 100');
      return;
    }
    setRounds(rounds + 1);
    setGuesses([guessedNumber, ...guesses]);
    if (guessedNumber === targetNumber) {
      setFeedback(`Congratulations, you guessed the number ${targetNumber} in ${rounds} rounds!`);
      setGameOver(true);
    } else {
      setFeedback(`Your guess is too ${guessedNumber > targetNumber ? 'high' : 'low'}!`);
      setGuessesFeedback([`${guessedNumber > targetNumber ? 'Too high' : 'Too low'}`, ...guessesFeedback]);
    }
    setGuess(''); // clear input field
  };
  

  // Function to handle new game start
  const handleNewGameStart = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setRounds(0);
    setGameOver(false);
    setFeedback('');
    setGuesses([]);
    setGuessesFeedback([]);
  };

  // Function to handle submit button or Enter key press
  const handleGuessSubmit = (event) => {
    event.preventDefault();
    handleGuessSubmission();
  };

  return (
    <View>
      <Text style={styles.textAlignCenter}>Kevin Bell</Text>
      <Text style={styles.textAlignCenter}>Guess a number between 1 and 100:</Text>
      <TextInput
        style={styles.textInput}
        value={guess}
        onChangeText={handleGuessInput}
        onSubmitEditing={handleGuessSubmit}
        placeholder="Enter your guess"
        keyboardType="numeric"
      />
      <Button title="Check My Guess" onPress={handleGuessSubmission} />
      {feedback ? <Text style={styles.textAlignCenter}>{feedback}</Text> : null}
      {gameOver && (
        <View>
          <Button title="New Game" onPress={handleNewGameStart} />
        </View>
      )}
      {guesses.length > 0 && (
        <View>
          <Text style={styles.textAlignCenter}>Past guesses:</Text>
          {guesses.map((guess, index) => (
            <View key={index}>
              <Text style={styles.textAlignCenter}>{`${guesses.length - index}. ${guess}`}</Text>
              {guessesFeedback[index] && (
                <Text style={styles.textAlignCenter}>{guessesFeedback[index]}</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    textAlignCenter: {
        textAlign: 'center',
    },
    textInput: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
    },
    view: {
        textAlign: 'center',
    },
});

export default GuessingGame;
