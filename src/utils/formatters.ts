export const formatCurrency = (amount: number): string => {
  if (amount <= 0) return 'Liên hệ báo giá';
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
};
