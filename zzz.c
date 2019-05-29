int f(int a)
{
  int fact = 1;

  for (int c = 1; c <= a; c++)
    { fact = fact * c; }

  return fact;
}