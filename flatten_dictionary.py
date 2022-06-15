from collections import defaultdict
def flatten_dictionary(dictionary):
  res = defaultdict(str)
  for key, value in dictionary.items():
    if type(value) is dict:
      nested = flatten_dictionary(value)
      for nkey, nvalue in nested.items():
        if key and nkey:
          res[key + '.' + nkey] = nvalue
        else:
          res[key or nkey] = nvalue
    else:
      res[key] = value
  return res

dictionary1 = {
  "Key1" : "1",
  "Key2" : {
    "a" : "2",
    "b" : "3",
    "c" : {
      "d" : "3",
      "e" : {
        "" : "1"
      }
    }
  }
}

dictionary2 = {
  'a': {
    '': {
      '' : {
        '': "2"
      }
    }
  }
}

dictionary3 = {
  'a': {
    '': {
      '' : {
        'b': "2"
      }
    }
  }
}

dictionary4 = {
  'a': {
    '': {
      'c' : {
        '': "2"
      }
    }
  }
}

dictionary5 = {
  '': {
    'a': {
      'c' : {
        '': "2"
      }
    }
  }
}

print(flatten_dictionary(dictionary1))
print(flatten_dictionary(dictionary2))
print(flatten_dictionary(dictionary3))
print(flatten_dictionary(dictionary4))
print(flatten_dictionary(dictionary5))
