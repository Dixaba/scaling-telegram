#include <cheerp/clientlib.h>
#include <cheerp/types.h>
#include <algorithm>
#include <vector>
#include <string>
#include <iostream>

#include "rapidjson/document.h"
#include "rapidjson/writer.h"
#include "rapidjson/stringbuffer.h"

typedef struct
{
  int a;
  std::string b;
} lootItem;

std::vector<std::string> *arg = nullptr;

std::vector<lootItem> *loot = nullptr;

int fa(int a)
{
  int fact = 1;

  for (int c = 1; c <= a; c++)
    {
      fact = fact * c;
    }

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
      c = a + b;
      a = b;
      b = c;
    }

  return c;
}

int filterer(const std::vector<std::string> *arr)
{
  auto output = new std::vector<std::string>(arr->size());
  auto it = std::copy_if(arr->begin(), arr->end(),
  output->begin(), [](std::string i) { return i.find('a') != std::string::npos; });
  output->resize(std::distance(output->begin(), it));
  int a = output->size();
  output->clear();
  delete output;
  output = nullptr;
  return a;
}

int getCount(const std::string &str)
{
  if (arg == nullptr)
    {
      return 0;
    }

  int count = 0;

  for (auto it = arg->begin(); it != arg->end(); ++it)
    if (it->find(str) != std::string::npos)
      {
        count++;
      }

  return count;
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
      int count = 0;

      for (int i = 0; i < arr.get_length(); i++)
        {
          client::String *ooyoy = (client::String *) arr[i];
          std::string str = (std::string) * (ooyoy);

          if (str.find('a') != std::string::npos)
            {
              count++;
            }
        }

      return count;
    }

    void load(client::Array arr)
    {
      if (arg != nullptr)
        {
          return;
        }

      arg = new std::vector<std::string>();

      for (int i = 0; i < arr.get_length(); i++)
        {
          client::String *ooyoy = (client::String *) arr[i];
          arg->push_back((std::string) *ooyoy);
        }
    }

    void clear()
    {
      arg->clear();
      delete arg;
      arg = nullptr;
    }

    int filtStr(client::String str)
    {
      std::string req = (std::string) str;
      return getCount(req);
    }

    void loadJSON(client::Array arr)
    {
      if (loot != nullptr)
        {
          return;
        }

      loot = new std::vector<lootItem>();

      for (int i = 0; i < arr.get_length(); i++)
        {
          client::Object *ooyoy = arr[i];
          std::string b = (std::string) * ((client::String *)(
                                             *ooyoy)[client::String("b")]);
          loot->push_back({0, b});
          std::cout
              << (std::string) * ((client::String *)(* ooyoy)[client::String("b")])
              << std::endl;
        }
    }

    client::String *getJSON(int a)
    {
      return &client::String("asd");
    }

    void clearJSON()
    {
      loot->clear();
      delete loot;
      loot = nullptr;
    }
};

void webMain()
{
}
