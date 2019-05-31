#include <cheerp/clientlib.h>
#include <cheerp/types.h>
#include <algorithm>
#include <vector>
#include <string>
#include <iostream>

#include "rapidjson/document.h"
#include "rapidjson/writer.h"
#include "rapidjson/stringbuffer.h"

enum displayCategory
{
  categoryEMPTY,
  categoryCHEST,
  categoryCHAMPION,
  categorySKIN,
  categoryEMOTE,
  categoryWARDSKIN,
  categorySUMMONERICON
};

enum redeemableStatus
{
  statusNOT_REDEEMABLE,
  statusALREADY_OWNED,
  statusREDEEMABLE_RENTAL,
  statusCHAMPION_NOT_OWNED
};

enum lootType
{
  typeCHAMPION_RENTAL,
  typeCHAMPION_TOKEN,
  typeSKIN_RENTAL,
  typeSKIN,
  typeCHEST,
  typeCURRENCY,
  typeMATERIAL,
  typeUNKNOWN
};

enum essenceType
{
  essenceCURRENCY_champion,
  essenceCURRENCY_cosmetic,
  essenceUNKNOWN
};

enum rarityClass
{
  rarityDEFAULT,
  rarityEPIC,
  rarityLEGENDARY,
  rarityULTIMATE
};

typedef struct
{
  int count;
  std::string *itemDesc;
  int value;



  //    "count": 1,
  //    "disenchantValue": 104,
  //    "displayCategories": "SKIN",
  //    "isRental": true,
  //    "itemDesc": "Злой и страшный Варвик",
  //    "itemStatus": "NONE",
  //    "lootId": "CHAMPION_SKIN_RENTAL_19003",
  //    "parentItemStatus": "NONE",
  //    "parentStoreItemId": 19,
  //    "rarity": "DEFAULT",
  //    "redeemableStatus": "CHAMPION_NOT_OWNED",
  //    "splashPath": "/lol-game-data/assets/v1/champion-splashes/19/19003.jpg",
  //    "storeItemId": 19003,
  //    "tags": "Fighter,Jungle,legacy,zaun",
  //    "tilePath": "/lol-game-data/assets/v1/champion-tiles/19/19003.jpg",
  //    "type": "SKIN_RENTAL",
  //    "upgradeEssenceValue": 220,
  //    "upgradeLootName": "CHAMPION_SKIN_19003",
  //    "value": 520





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

      //        loot = new std::vector<lootItem>();
      //        for (int i = 0; i < arr.get_length(); i++) {
      //            client::Object *ooyoy = arr[i];
      //            int count = (*ooyoy)[client::String("count")]->valueOf<int>();
      //            std::string *itemDesc = new std::string(*((client::String *) (
      //                    *ooyoy)[client::String("itemDesc")]));
      //            int value = (*ooyoy)[client::String("value")]->valueOf<int>();
      //            loot->push_back({count, itemDesc, value});
      //        }
      //        client::String *a = arr.toString();
      client::String *a = client::JSON.stringify((client::Object *)&arr);
      client::console.log(*a);
      std::string *itemDesc = new std::string(*a);
      std::wstring asdf;
      std::cout << *itemDesc << std::endl;
    }

    int getJSON(int a)
    {
      return countJSON(a);
    }

    void clearJSON()
    {
      for (auto it = loot->begin(); it != loot->end(); ++it)
        {
          delete it->itemDesc;
        }

      loot->clear();
      delete loot;
      loot = nullptr;
    }
};

void webMain()
{
}
