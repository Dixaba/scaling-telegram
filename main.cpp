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
  int value;
  std::string *b;
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

int countJSON(int a)
{
  if (loot == nullptr)
    {
      return 0;
    }

  int count = 0;

  for (auto it = loot->begin(); it != loot->end(); ++it)
    if (it->value > a)
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
      return fa(a);
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
          int a = (*ooyoy)[client::String("value")]->valueOf<int>();
//          std::string *b = new std::string(*((client::String *)(
//                                               *ooyoy)[client::String("itemDesc")]));
//          loot->push_back({a, b});
          loot->push_back({a, nullptr});
        }
    }

    int getJSON(int a)
    {
      return countJSON(a);
    }

    void clearJSON()
    {
      for (auto it = loot->begin(); it != loot->end(); ++it)
        { delete it->b; }

      loot->clear();
      delete loot;
      loot = nullptr;
    }
};

void webMain()
{
}
