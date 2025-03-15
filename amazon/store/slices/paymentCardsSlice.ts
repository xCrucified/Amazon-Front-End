import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardType = "visa" | "mastercard";

export interface PaymentCard {
  id: string;
  name: string;
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cardType: CardType;
  cvv: string;
}

interface PaymentCardsState {
  cards: PaymentCard[];
}

const initialState: PaymentCardsState = {
  cards: [
    {
      id: "1",
      name: "Monzo",
      cardNumber: "1234 5678 9101 1121",
      cardHolder: "Andrew Garfield",
      expiry: "01/22",
      cardType: "mastercard",
      cvv: "123",
    },
    {
      id: "2",
      name: "Lloyds Bank",
      cardNumber: "4321 8756 1234 3724",
      cardHolder: "Andrew Garfield",
      expiry: "02/22",
      cardType: "visa",
      cvv: "321"
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
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard(state, action: PayloadAction<PaymentCard>) {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
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
