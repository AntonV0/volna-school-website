export const examTuition = {
  gcse: { groupHour: 18, privateHour: 40, private30: 25, private90: 55 },
  alevel: { groupHour: 20, privateHour: 45, private30: 30, private90: 65 },
} as const;
export const gbp = (amount: number) => `£${amount}`;
export const privateLengthsLabel = (price: {
  private30: number;
  private90: number;
}) => `30 minutes ${gbp(price.private30)} · 90 minutes ${gbp(price.private90)}`;
