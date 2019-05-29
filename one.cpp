#include <cheerp/clientlib.h>
#include <cheerp/types.h>
#include <algorithm>
#include <vector>
#include <string>
#include <iostream>

[[cheerp::wasm]]
int fa(int a)
{
  int fact = 1;

  for (int c = 1; c <= a; c++)
    { fact = fact * c; }

  return fact;
}

int Fib(int n)
{
  int value = 0;

  if (n < 1)
    {
      return 0;
    }

  if (n < 3)
    {
      return 1;
    }

  int a, b, c;
  a = b = 1;

  for (int i = 3; i <= n; i++)
    {
      c = a + b; // вычисляем следующее число как сумму двух предыдущих
      a = b;
      b = c; // перемещаем два предыдущих числа
    }

  return c;
}

int filterer(const std::vector<std::string> *arr)
{
  auto output = new std::vector<std::string>(arr->size());
  auto it = std::copy_if(arr->begin(), arr->end(),
  output->begin(), [](std::string i) {return i.find('a') != std::string::npos;});
  output->resize(std::distance(output->begin(), it));
  int a = output->size();
  output->clear();
  delete output;
  output = nullptr;
  return a;
}

class [[cheerp::jsexport]] [[cheerp::genericjs]] myMath {
  public:
    myMath() {}

    int f(int a)
    {
      return Fib(a);
    }

    int filt(client::Array arr)
    {
      auto arg = new std::vector<std::string>();

      for (int i = 0; i < arr.get_length(); i++)
        {
          client::String *ooyoy;
          ooyoy = (client::String *)arr[i];
          arg->push_back((std::string)(*ooyoy));
        }

      int a = filterer(arg);
      arg->clear();

      for (int i = 0; i < arg->size(); i++)
        {
          std::cout << std::endl;
        }

      delete arg;
      arg = nullptr;
      return a;
    }

    // int filt(client::Array arr)
    // {

    //   int count = 0;
    //   for (int i = 0; i < arr.get_length(); i++)
    //     {
    //       client::String *ooyoy;
    //       ooyoy = (client::String *)arr[i];
    //       if(((std::string*)ooyoy)->find('a') != std::string::npos)
    //       count++;
    //     }

    //   return count;
    // }

    // int filt(client::Array arr)
    // {
    //   int count = 0;

    //   for (int i = 0; i < arr.get_length(); i++)
    //     {
    //       client::String *ooyoy;
    //       ooyoy = (client::String *)arr[i];

    //       if (ooyoy->indexOf("a") > 0)
    //         { count++; }
    //     }

    //   return count;
    // }
};

void webMain()
{
}