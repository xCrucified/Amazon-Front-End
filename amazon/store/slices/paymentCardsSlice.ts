import { PaymentCard } from "@/lib/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentCardsState {
  cards: PaymentCard[];
}

const initialState: PaymentCardsState = {
  cards: [
    {
      name: "Monzo",
      cardNumber: "4242424242424242",
      cardHolder: "Andrew Garfield",
      expiry: "01/26",
      cardType: "mastercard",
      cvv: "123",
    },
    {
      name: "Lloyds Bank",
      cardNumber: "4321875612343724",
      cardHolder: "Andrew Garfield",
      expiry: "02/26",
      cardType: "visa",
      cvv: "321",
    },
  ],
};

export const paymentCardsSlice = createSlice({
  name: "paymentCards",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<PaymentCard>) {
      state.cards.push(action.payload);
    },
    removeCard(state, action: PayloadAction<string>) {
      state.cards = state.cards.filter((card) => card.cardNumber !== action.payload);
    },
    updateCard(state, action: PayloadAction<PaymentCard>) {
      const index = state.cards.findIndex((card) => card.cardNumber === action.payload.cardNumber);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    clearCards(state) {
      state.cards = [];
    },
  },
});

export const { addCard, removeCard, updateCard, clearCards } = paymentCardsSlice.actions;
export default paymentCardsSlice.reducer;
