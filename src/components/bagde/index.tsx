import * as S from './styles';

export const Badge = ({ color }: { color: string }) => (
  <S.Span color={color}>{color}</S.Span>
);
