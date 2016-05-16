var searchIndex = {};
searchIndex["jsonrpc_core"] = {"doc":"### Transport agnostic jsonrpc library.","items":[[11,"find","serde_json::value","If the `Value` is an Object, returns the value associated with the provided key.\nOtherwise, returns None.",0,{"inputs":[{"name":"value"},{"name":"str"}],"output":{"name":"option"}}],[11,"find_path","","Attempts to get a nested Value Object for each key in `keys`.\nIf any key is found not to exist, find_path will return None.\nOtherwise, it will return the `Value` associated with the final key.",0,null],[11,"lookup","","Looks up a value by path.",0,{"inputs":[{"name":"value"},{"name":"str"}],"output":{"name":"option"}}],[11,"search","","If the `Value` is an Object, performs a depth-first search until\na value associated with the provided key is found. If no value is found\nor the `Value` is not an Object, returns None.",0,{"inputs":[{"name":"value"},{"name":"str"}],"output":{"name":"option"}}],[11,"is_object","","Returns true if the `Value` is an Object. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"as_object","","If the `Value` is an Object, returns the associated BTreeMap.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"as_object_mut","","If the `Value` is an Object, returns the associated mutable BTreeMap.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"is_array","","Returns true if the `Value` is an Array. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"as_array","","If the `Value` is an Array, returns the associated vector.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"as_array_mut","","If the `Value` is an Array, returns the associated mutable vector.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"is_string","","Returns true if the `Value` is a String. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"as_string","","If the `Value` is a String, returns the associated str.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"is_number","","Returns true if the `Value` is a Number. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"is_i64","","Returns true if the `Value` is a i64. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"is_u64","","Returns true if the `Value` is a u64. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"is_f64","","Returns true if the `Value` is a f64. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"as_i64","","If the `Value` is a number, return or cast it to a i64.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"as_u64","","If the `Value` is a number, return or cast it to a u64.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"as_f64","","If the `Value` is a number, return or cast it to a f64.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"is_boolean","","Returns true if the `Value` is a Boolean. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"as_boolean","","If the `Value` is a Boolean, returns the associated bool.\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"is_null","","Returns true if the `Value` is a Null. Returns false otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"bool"}}],[11,"as_null","","If the `Value` is a Null, returns ().\nReturns None otherwise.",0,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[11,"new","serde_json::builder","Construct an `ObjectBuilder`.",1,{"inputs":[],"output":{"name":"arraybuilder"}}],[11,"unwrap","","Return the constructed `Value`.",1,{"inputs":[{"name":"arraybuilder"}],"output":{"name":"value"}}],[11,"push","","Insert a value into the array.",1,{"inputs":[{"name":"arraybuilder"},{"name":"t"}],"output":{"name":"arraybuilder"}}],[11,"push_array","","Creates and passes an `ArrayBuilder` into a closure, then inserts the resulting array into\nthis array.",1,{"inputs":[{"name":"arraybuilder"},{"name":"f"}],"output":{"name":"arraybuilder"}}],[11,"push_object","","Creates and passes an `ArrayBuilder` into a closure, then inserts the resulting object into\nthis array.",1,{"inputs":[{"name":"arraybuilder"},{"name":"f"}],"output":{"name":"arraybuilder"}}],[11,"new","","Construct an `ObjectBuilder`.",2,{"inputs":[],"output":{"name":"objectbuilder"}}],[11,"unwrap","","Return the constructed `Value`.",2,{"inputs":[{"name":"objectbuilder"}],"output":{"name":"value"}}],[11,"insert","","Insert a key-value pair into the object.",2,{"inputs":[{"name":"objectbuilder"},{"name":"s"},{"name":"v"}],"output":{"name":"objectbuilder"}}],[11,"insert_array","","Creates and passes an `ObjectBuilder` into a closure, then inserts the resulting array into\nthis object.",2,{"inputs":[{"name":"objectbuilder"},{"name":"s"},{"name":"f"}],"output":{"name":"objectbuilder"}}],[11,"insert_object","","Creates and passes an `ObjectBuilder` into a closure, then inserts the resulting object into\nthis object.",2,{"inputs":[{"name":"objectbuilder"},{"name":"s"},{"name":"f"}],"output":{"name":"objectbuilder"}}],[11,"new","serde_json::de","Creates the JSON parser from an `std::iter::Iterator`.",3,{"inputs":[{"name":"iter"}],"output":{"name":"deserializer"}}],[11,"end","","The `Deserializer::end` method should be called after a value has been fully deserialized.\nThis allows the `Deserializer` to validate that the input stream is at the end or that it\nonly has trailing whitespace.",3,{"inputs":[{"name":"deserializer"}],"output":{"name":"result"}}],[11,"deserialize","","",3,{"inputs":[{"name":"deserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_option","","Parses a `null` as a None, and any other values as a `Some(...)`.",3,{"inputs":[{"name":"deserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_newtype_struct","","Parses a newtype struct as the underlying value.",3,{"inputs":[{"name":"deserializer"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_enum","","Parses an enum as an object like `{&quot;$KEY&quot;:$VALUE}`, where $VALUE is either a straight\nvalue, a `[..]`, or a `{..}`.",3,null],[11,"visit","","",4,{"inputs":[{"name":"seqvisitor"}],"output":{"name":"result"}}],[11,"end","","",4,{"inputs":[{"name":"seqvisitor"}],"output":{"name":"result"}}],[11,"visit_key","","",5,{"inputs":[{"name":"mapvisitor"}],"output":{"name":"result"}}],[11,"visit_value","","",5,{"inputs":[{"name":"mapvisitor"}],"output":{"name":"result"}}],[11,"end","","",5,{"inputs":[{"name":"mapvisitor"}],"output":{"name":"result"}}],[11,"missing_field","","",5,{"inputs":[{"name":"mapvisitor"},{"name":"str"}],"output":{"name":"result"}}],[11,"visit_variant","","",3,{"inputs":[{"name":"deserializer"}],"output":{"name":"result"}}],[11,"visit_unit","","",3,{"inputs":[{"name":"deserializer"}],"output":{"name":"result"}}],[11,"visit_newtype","","",3,{"inputs":[{"name":"deserializer"}],"output":{"name":"result"}}],[11,"visit_tuple","","",3,{"inputs":[{"name":"deserializer"},{"name":"usize"},{"name":"v"}],"output":{"name":"result"}}],[11,"visit_struct","","",3,null],[11,"new","","Returns an `Iterator` of decoded JSON values from an iterator over\n`Iterator&lt;Item=io::Result&lt;u8&gt;&gt;`.",6,{"inputs":[{"name":"iter"}],"output":{"name":"streamdeserializer"}}],[11,"next","","",6,{"inputs":[{"name":"streamdeserializer"}],"output":{"name":"option"}}],[11,"eq","serde_json::error","",7,{"inputs":[{"name":"errorcode"},{"name":"errorcode"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"errorcode"},{"name":"errorcode"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"errorcode"}],"output":{"name":"errorcode"}}],[11,"fmt","","",7,{"inputs":[{"name":"errorcode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",8,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",8,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"fmt","","",8,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",8,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",8,{"inputs":[{"name":"fromutf8error"}],"output":{"name":"error"}}],[11,"from","","",8,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"custom","","",8,{"inputs":[{"name":"t"}],"output":{"name":"error"}}],[11,"end_of_stream","","",8,{"inputs":[],"output":{"name":"error"}}],[11,"invalid_type","","",8,{"inputs":[{"name":"type"}],"output":{"name":"error"}}],[11,"invalid_value","","",8,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"invalid_length","","",8,{"inputs":[{"name":"usize"}],"output":{"name":"error"}}],[11,"unknown_variant","","",8,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"unknown_field","","",8,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"missing_field","","",8,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"custom","","Raised when there is general error when deserializing a type.",8,{"inputs":[{"name":"t"}],"output":{"name":"error"}}],[11,"new","serde_json::ser","Creates a new JSON serializer.",9,{"inputs":[{"name":"w"}],"output":{"name":"serializer"}}],[11,"pretty","","Creates a new JSON pretty print serializer.",9,{"inputs":[{"name":"w"}],"output":{"name":"serializer"}}],[11,"with_formatter","","Creates a new JSON visitor whose output will be written to the writer\nspecified.",9,{"inputs":[{"name":"w"},{"name":"f"}],"output":{"name":"serializer"}}],[11,"into_inner","","Unwrap the `Writer` from the `Serializer`.",9,{"inputs":[{"name":"serializer"}],"output":{"name":"w"}}],[11,"serialize_bool","","",9,{"inputs":[{"name":"serializer"},{"name":"bool"}],"output":{"name":"result"}}],[11,"serialize_isize","","",9,{"inputs":[{"name":"serializer"},{"name":"isize"}],"output":{"name":"result"}}],[11,"serialize_i8","","",9,{"inputs":[{"name":"serializer"},{"name":"i8"}],"output":{"name":"result"}}],[11,"serialize_i16","","",9,{"inputs":[{"name":"serializer"},{"name":"i16"}],"output":{"name":"result"}}],[11,"serialize_i32","","",9,{"inputs":[{"name":"serializer"},{"name":"i32"}],"output":{"name":"result"}}],[11,"serialize_i64","","",9,{"inputs":[{"name":"serializer"},{"name":"i64"}],"output":{"name":"result"}}],[11,"serialize_usize","","",9,{"inputs":[{"name":"serializer"},{"name":"usize"}],"output":{"name":"result"}}],[11,"serialize_u8","","",9,{"inputs":[{"name":"serializer"},{"name":"u8"}],"output":{"name":"result"}}],[11,"serialize_u16","","",9,{"inputs":[{"name":"serializer"},{"name":"u16"}],"output":{"name":"result"}}],[11,"serialize_u32","","",9,{"inputs":[{"name":"serializer"},{"name":"u32"}],"output":{"name":"result"}}],[11,"serialize_u64","","",9,{"inputs":[{"name":"serializer"},{"name":"u64"}],"output":{"name":"result"}}],[11,"serialize_f32","","",9,{"inputs":[{"name":"serializer"},{"name":"f32"}],"output":{"name":"result"}}],[11,"serialize_f64","","",9,{"inputs":[{"name":"serializer"},{"name":"f64"}],"output":{"name":"result"}}],[11,"serialize_char","","",9,{"inputs":[{"name":"serializer"},{"name":"char"}],"output":{"name":"result"}}],[11,"serialize_str","","",9,{"inputs":[{"name":"serializer"},{"name":"str"}],"output":{"name":"result"}}],[11,"serialize_none","","",9,{"inputs":[{"name":"serializer"}],"output":{"name":"result"}}],[11,"serialize_some","","",9,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_unit","","",9,{"inputs":[{"name":"serializer"}],"output":{"name":"result"}}],[11,"serialize_newtype_struct","","Override `visit_newtype_struct` to serialize newtypes without an object wrapper.",9,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_unit_variant","","",9,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"}],"output":{"name":"result"}}],[11,"serialize_newtype_variant","","",9,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_seq","","",9,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_tuple_variant","","",9,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_seq_elt","","",9,{"inputs":[{"name":"serializer"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_map","","",9,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_struct_variant","","",9,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_map_elt","","",9,{"inputs":[{"name":"serializer"},{"name":"k"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_str","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"str"}],"output":{"name":"result"}}],[11,"serialize_bool","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"bool"}],"output":{"name":"result"}}],[11,"serialize_i64","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"i64"}],"output":{"name":"result"}}],[11,"serialize_u64","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"u64"}],"output":{"name":"result"}}],[11,"serialize_f64","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"f64"}],"output":{"name":"result"}}],[11,"serialize_unit","","",10,{"inputs":[{"name":"mapkeyserializer"}],"output":{"name":"result"}}],[11,"serialize_none","","",10,{"inputs":[{"name":"mapkeyserializer"}],"output":{"name":"result"}}],[11,"serialize_some","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_seq","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_seq_elt","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_map","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_map_elt","","",10,{"inputs":[{"name":"mapkeyserializer"},{"name":"k"},{"name":"v"}],"output":{"name":"result"}}],[11,"open","","",11,{"inputs":[{"name":"compactformatter"},{"name":"w"},{"name":"u8"}],"output":{"name":"result"}}],[11,"comma","","",11,{"inputs":[{"name":"compactformatter"},{"name":"w"},{"name":"bool"}],"output":{"name":"result"}}],[11,"colon","","",11,{"inputs":[{"name":"compactformatter"},{"name":"w"}],"output":{"name":"result"}}],[11,"close","","",11,{"inputs":[{"name":"compactformatter"},{"name":"w"},{"name":"u8"}],"output":{"name":"result"}}],[11,"new","","Construct a pretty printer formatter that defaults to using two spaces for indentation.",12,{"inputs":[],"output":{"name":"prettyformatter"}}],[11,"with_indent","","Construct a pretty printer formatter that uses the `indent` string for indentation.",12,null],[11,"open","","",12,{"inputs":[{"name":"prettyformatter"},{"name":"w"},{"name":"u8"}],"output":{"name":"result"}}],[11,"comma","","",12,{"inputs":[{"name":"prettyformatter"},{"name":"w"},{"name":"bool"}],"output":{"name":"result"}}],[11,"colon","","",12,{"inputs":[{"name":"prettyformatter"},{"name":"w"}],"output":{"name":"result"}}],[11,"close","","",12,{"inputs":[{"name":"prettyformatter"},{"name":"w"},{"name":"u8"}],"output":{"name":"result"}}],[11,"eq","serde_json::value","",0,{"inputs":[{"name":"value"},{"name":"value"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"value"},{"name":"value"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"value"}],"output":{"name":"value"}}],[11,"serialize","","",0,{"inputs":[{"name":"value"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",0,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"write","","",13,null],[11,"flush","","",13,{"inputs":[{"name":"writerformatter"}],"output":{"name":"result"}}],[11,"fmt","","Serializes a json value into a string",0,{"inputs":[{"name":"value"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",14,{"inputs":[{"name":"state"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct a new `Serializer`.",15,{"inputs":[],"output":{"name":"serializer"}}],[11,"unwrap","","Unwrap the `Serializer` and return the `Value`.",15,{"inputs":[{"name":"serializer"}],"output":{"name":"value"}}],[11,"serialize_bool","","",15,{"inputs":[{"name":"serializer"},{"name":"bool"}],"output":{"name":"result"}}],[11,"serialize_i64","","",15,{"inputs":[{"name":"serializer"},{"name":"i64"}],"output":{"name":"result"}}],[11,"serialize_u64","","",15,{"inputs":[{"name":"serializer"},{"name":"u64"}],"output":{"name":"result"}}],[11,"serialize_f64","","",15,{"inputs":[{"name":"serializer"},{"name":"f64"}],"output":{"name":"result"}}],[11,"serialize_char","","",15,{"inputs":[{"name":"serializer"},{"name":"char"}],"output":{"name":"result"}}],[11,"serialize_str","","",15,{"inputs":[{"name":"serializer"},{"name":"str"}],"output":{"name":"result"}}],[11,"serialize_none","","",15,{"inputs":[{"name":"serializer"}],"output":{"name":"result"}}],[11,"serialize_some","","",15,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_unit","","",15,{"inputs":[{"name":"serializer"}],"output":{"name":"result"}}],[11,"serialize_unit_variant","","",15,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"}],"output":{"name":"result"}}],[11,"serialize_newtype_variant","","",15,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_seq","","",15,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_tuple_variant","","",15,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_seq_elt","","",15,{"inputs":[{"name":"serializer"},{"name":"t"}],"output":{"name":"result"}}],[11,"serialize_map","","",15,{"inputs":[{"name":"serializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_struct_variant","","",15,{"inputs":[{"name":"serializer"},{"name":"str"},{"name":"usize"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"serialize_map_elt","","",15,{"inputs":[{"name":"serializer"},{"name":"k"},{"name":"v"}],"output":{"name":"result"}}],[11,"new","","Creates a new deserializer instance for deserializing the specified JSON value.",16,{"inputs":[{"name":"value"}],"output":{"name":"deserializer"}}],[11,"deserialize","","",16,{"inputs":[{"name":"deserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_option","","",16,{"inputs":[{"name":"deserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_enum","","",16,null],[11,"deserialize_newtype_struct","","",16,{"inputs":[{"name":"deserializer"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"visit_variant","","",17,{"inputs":[{"name":"variantdeserializer"}],"output":{"name":"result"}}],[11,"visit_unit","","",17,{"inputs":[{"name":"variantdeserializer"}],"output":{"name":"result"}}],[11,"visit_newtype","","",17,{"inputs":[{"name":"variantdeserializer"}],"output":{"name":"result"}}],[11,"visit_tuple","","",17,{"inputs":[{"name":"variantdeserializer"},{"name":"usize"},{"name":"v"}],"output":{"name":"result"}}],[11,"visit_struct","","",17,null],[11,"deserialize","","",18,{"inputs":[{"name":"seqdeserializer"},{"name":"v"}],"output":{"name":"result"}}],[11,"visit","","",18,{"inputs":[{"name":"seqdeserializer"}],"output":{"name":"result"}}],[11,"end","","",18,{"inputs":[{"name":"seqdeserializer"}],"output":{"name":"result"}}],[11,"size_hint","","",18,null],[11,"visit_key","","",19,{"inputs":[{"name":"mapdeserializer"}],"output":{"name":"result"}}],[11,"visit_value","","",19,{"inputs":[{"name":"mapdeserializer"}],"output":{"name":"result"}}],[11,"end","","",19,{"inputs":[{"name":"mapdeserializer"}],"output":{"name":"result"}}],[11,"missing_field","","",19,{"inputs":[{"name":"mapdeserializer"},{"name":"str"}],"output":{"name":"result"}}],[11,"size_hint","","",19,null],[11,"deserialize","","",19,{"inputs":[{"name":"mapdeserializer"},{"name":"v"}],"output":{"name":"result"}}],[4,"Value","jsonrpc_core","Represents a JSON value",null,null],[13,"Null","","Represents a JSON null value",0,null],[13,"Bool","","Represents a JSON Boolean",0,null],[13,"I64","","Represents a JSON signed integer",0,null],[13,"U64","","Represents a JSON unsigned integer",0,null],[13,"F64","","Represents a JSON floating point number",0,null],[13,"String","","Represents a JSON string",0,null],[13,"Array","","Represents a JSON array",0,null],[13,"Object","","Represents a JSON object",0,null],[0,"version","","jsonrpc version field",null,null],[4,"Version","jsonrpc_core::version","",null,null],[13,"V2","","",20,null],[11,"fmt","","",20,{"inputs":[{"name":"version"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",20,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"bool"}}],[11,"ne","","",20,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"bool"}}],[11,"serialize","","",20,{"inputs":[{"name":"version"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",20,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"id","jsonrpc_core","jsonrpc id field",null,null],[4,"Id","jsonrpc_core::id","",null,null],[13,"Null","","",21,null],[13,"Str","","",21,null],[13,"Num","","",21,null],[11,"fmt","","",21,{"inputs":[{"name":"id"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",21,{"inputs":[{"name":"id"},{"name":"id"}],"output":{"name":"bool"}}],[11,"ne","","",21,{"inputs":[{"name":"id"},{"name":"id"}],"output":{"name":"bool"}}],[11,"serialize","","",21,{"inputs":[{"name":"id"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",21,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"params","jsonrpc_core","jsonrpc params field",null,null],[4,"Params","jsonrpc_core::params","",null,null],[13,"Array","","",22,null],[13,"Map","","",22,null],[13,"None","","",22,null],[11,"fmt","","",22,{"inputs":[{"name":"params"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",22,{"inputs":[{"name":"params"},{"name":"params"}],"output":{"name":"bool"}}],[11,"ne","","",22,{"inputs":[{"name":"params"},{"name":"params"}],"output":{"name":"bool"}}],[11,"serialize","","",22,{"inputs":[{"name":"params"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",22,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"request","jsonrpc_core","jsonrpc request",null,null],[3,"MethodCall","jsonrpc_core::request","Represents jsonrpc request which is a method call.",null,null],[12,"jsonrpc","","A String specifying the version of the JSON-RPC protocol.\nMUST be exactly &quot;2.0&quot;.",23,null],[12,"method","","A String containing the name of the method to be invoked.",23,null],[12,"params","","A Structured value that holds the parameter values to be used\nduring the invocation of the method. This member MAY be omitted.",23,null],[12,"id","","An identifier established by the Client that MUST contain a String,\nNumber, or NULL value if included. If it is not included it is assumed\nto be a notification.",23,null],[3,"Notification","","Represents jsonrpc request which is a notification.",null,null],[12,"jsonrpc","","A String specifying the version of the JSON-RPC protocol.\nMUST be exactly &quot;2.0&quot;.",24,null],[12,"method","","A String containing the name of the method to be invoked.",24,null],[12,"params","","A Structured value that holds the parameter values to be used\nduring the invocation of the method. This member MAY be omitted.",24,null],[4,"Call","","Represents single jsonrpc call.",null,null],[13,"MethodCall","","",25,null],[13,"Notification","","",25,null],[13,"Invalid","","",25,null],[4,"Request","","Represents jsonrpc request.",null,null],[13,"Single","","",26,null],[13,"Batch","","",26,null],[11,"fmt","","",23,{"inputs":[{"name":"methodcall"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",23,{"inputs":[{"name":"methodcall"},{"name":"methodcall"}],"output":{"name":"bool"}}],[11,"ne","","",23,{"inputs":[{"name":"methodcall"},{"name":"methodcall"}],"output":{"name":"bool"}}],[11,"fmt","","",24,{"inputs":[{"name":"notification"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",24,{"inputs":[{"name":"notification"},{"name":"notification"}],"output":{"name":"bool"}}],[11,"ne","","",24,{"inputs":[{"name":"notification"},{"name":"notification"}],"output":{"name":"bool"}}],[11,"fmt","","",25,{"inputs":[{"name":"call"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",25,{"inputs":[{"name":"call"},{"name":"call"}],"output":{"name":"bool"}}],[11,"ne","","",25,{"inputs":[{"name":"call"},{"name":"call"}],"output":{"name":"bool"}}],[11,"serialize","","",25,{"inputs":[{"name":"call"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",25,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"fmt","","",26,{"inputs":[{"name":"request"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",26,{"inputs":[{"name":"request"},{"name":"request"}],"output":{"name":"bool"}}],[11,"ne","","",26,{"inputs":[{"name":"request"},{"name":"request"}],"output":{"name":"bool"}}],[11,"serialize","","",26,{"inputs":[{"name":"request"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",26,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"response","jsonrpc_core","jsonrpc response",null,null],[3,"Success","jsonrpc_core::response","",null,null],[12,"jsonrpc","","",27,null],[12,"result","","",27,null],[12,"id","","",27,null],[3,"Failure","","",null,null],[12,"jsonrpc","","",28,null],[12,"error","","",28,null],[12,"id","","",28,null],[4,"Output","","",null,null],[13,"Success","","",29,null],[13,"Failure","","",29,null],[4,"Response","","",null,null],[13,"Single","","",30,null],[13,"Batch","","",30,null],[11,"fmt","","",27,{"inputs":[{"name":"success"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",27,{"inputs":[{"name":"success"},{"name":"success"}],"output":{"name":"bool"}}],[11,"ne","","",27,{"inputs":[{"name":"success"},{"name":"success"}],"output":{"name":"bool"}}],[11,"fmt","","",28,{"inputs":[{"name":"failure"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",28,{"inputs":[{"name":"failure"},{"name":"failure"}],"output":{"name":"bool"}}],[11,"ne","","",28,{"inputs":[{"name":"failure"},{"name":"failure"}],"output":{"name":"bool"}}],[11,"fmt","","",29,{"inputs":[{"name":"output"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",29,{"inputs":[{"name":"output"},{"name":"output"}],"output":{"name":"bool"}}],[11,"ne","","",29,{"inputs":[{"name":"output"},{"name":"output"}],"output":{"name":"bool"}}],[11,"deserialize","","",29,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",29,{"inputs":[{"name":"output"},{"name":"s"}],"output":{"name":"result"}}],[11,"fmt","","",30,{"inputs":[{"name":"response"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",30,{"inputs":[{"name":"response"},{"name":"response"}],"output":{"name":"bool"}}],[11,"ne","","",30,{"inputs":[{"name":"response"},{"name":"response"}],"output":{"name":"bool"}}],[11,"deserialize","","",30,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",30,{"inputs":[{"name":"response"},{"name":"s"}],"output":{"name":"result"}}],[0,"error","jsonrpc_core","jsonrpc errors",null,null],[3,"Error","jsonrpc_core::error","",null,null],[12,"code","","",31,null],[12,"message","","",31,null],[12,"data","","",31,null],[4,"ErrorCode","","",null,null],[13,"ParseError","","Invalid JSON was received by the server.\nAn error occurred on the server while parsing the JSON text.",32,null],[13,"InvalidRequest","","The JSON sent is not a valid Request object.",32,null],[13,"MethodNotFound","","The method does not exist / is not available.",32,null],[13,"InvalidParams","","Invalid method parameter(s).",32,null],[13,"InternalError","","Internal JSON-RPC error.",32,null],[13,"ServerError","","Reserved for implementation-defined server-errors.",32,null],[11,"fmt","","",32,{"inputs":[{"name":"errorcode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",32,{"inputs":[{"name":"errorcode"},{"name":"errorcode"}],"output":{"name":"bool"}}],[11,"ne","","",32,{"inputs":[{"name":"errorcode"},{"name":"errorcode"}],"output":{"name":"bool"}}],[11,"code","","",32,{"inputs":[{"name":"errorcode"}],"output":{"name":"i64"}}],[11,"description","","",32,{"inputs":[{"name":"errorcode"}],"output":{"name":"string"}}],[11,"deserialize","","",32,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",32,{"inputs":[{"name":"errorcode"},{"name":"s"}],"output":{"name":"result"}}],[11,"fmt","","",31,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",31,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",31,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"new","","",31,{"inputs":[{"name":"errorcode"}],"output":{"name":"self"}}],[11,"parse_error","","",31,{"inputs":[],"output":{"name":"self"}}],[11,"invalid_request","","",31,{"inputs":[],"output":{"name":"self"}}],[11,"method_not_found","","",31,{"inputs":[],"output":{"name":"self"}}],[11,"invalid_params","","",31,{"inputs":[],"output":{"name":"self"}}],[11,"internal_error","","",31,{"inputs":[],"output":{"name":"self"}}],[0,"commander","jsonrpc_core","method and notification commands executor",null,null],[3,"Commander","jsonrpc_core::commander","Commands executor.",null,null],[8,"MethodCommand","","Should be used to handle single method call.",null,null],[10,"execute","","",33,{"inputs":[{"name":"methodcommand"},{"name":"params"}],"output":{"name":"result"}}],[8,"NotificationCommand","","Should be used to handle single notification.",null,null],[10,"execute","","",34,{"inputs":[{"name":"notificationcommand"},{"name":"params"}],"output":null}],[11,"new","","",35,{"inputs":[],"output":{"name":"self"}}],[11,"add_method","","",35,{"inputs":[{"name":"commander"},{"name":"string"},{"name":"box"}],"output":null}],[11,"add_methods","","",35,{"inputs":[{"name":"commander"},{"name":"hashmap"}],"output":null}],[11,"add_notification","","",35,{"inputs":[{"name":"commander"},{"name":"string"},{"name":"box"}],"output":null}],[11,"add_notifications","","",35,{"inputs":[{"name":"commander"},{"name":"hashmap"}],"output":null}],[11,"execute_method","","",35,{"inputs":[{"name":"commander"},{"name":"string"},{"name":"params"}],"output":{"name":"result"}}],[11,"execute_notification","","",35,{"inputs":[{"name":"commander"},{"name":"string"},{"name":"params"}],"output":null}],[0,"request_handler","jsonrpc_core","jsonrpc server request handler",null,null],[3,"RequestHandler","jsonrpc_core::request_handler","",null,null],[11,"new","","",36,{"inputs":[],"output":{"name":"self"}}],[11,"add_method","","",36,{"inputs":[{"name":"requesthandler"},{"name":"string"},{"name":"box"}],"output":null}],[11,"add_methods","","",36,{"inputs":[{"name":"requesthandler"},{"name":"hashmap"}],"output":null}],[11,"add_notification","","",36,{"inputs":[{"name":"requesthandler"},{"name":"string"},{"name":"box"}],"output":null}],[11,"add_notifications","","",36,{"inputs":[{"name":"requesthandler"},{"name":"hashmap"}],"output":null}],[11,"handle_request","","",36,{"inputs":[{"name":"requesthandler"},{"name":"request"}],"output":{"name":"option"}}],[0,"io","jsonrpc_core","jsonrpc io",null,null],[3,"IoDelegate","jsonrpc_core::io","",null,null],[3,"IoHandler","","Should be used to handle jsonrpc io.",null,null],[11,"new","","",37,{"inputs":[{"name":"arc"}],"output":{"name":"self"}}],[11,"add_method","","",37,{"inputs":[{"name":"iodelegate"},{"name":"str"},{"name":"f"}],"output":null}],[11,"add_notification","","",37,{"inputs":[{"name":"iodelegate"},{"name":"str"},{"name":"f"}],"output":null}],[11,"new","","",38,{"inputs":[],"output":{"name":"self"}}],[11,"add_method","","",38,{"inputs":[{"name":"iohandler"},{"name":"str"},{"name":"c"}],"output":null}],[11,"add_notification","","",38,{"inputs":[{"name":"iohandler"},{"name":"str"},{"name":"c"}],"output":null}],[11,"add_delegate","","",38,{"inputs":[{"name":"iohandler"},{"name":"iodelegate"}],"output":null}],[11,"handle_request","","",38,{"inputs":[{"name":"iohandler"},{"name":"str"}],"output":{"name":"option"}}],[0,"util","jsonrpc_core","",null,null],[5,"from_params","jsonrpc_core::util","",null,{"inputs":[{"name":"params"}],"output":{"name":"result"}}],[5,"to_value","","",null,{"inputs":[{"name":"s"}],"output":{"name":"result"}}]],"paths":[[4,"Value"],[3,"ArrayBuilder"],[3,"ObjectBuilder"],[3,"Deserializer"],[3,"SeqVisitor"],[3,"MapVisitor"],[3,"StreamDeserializer"],[4,"ErrorCode"],[4,"Error"],[3,"Serializer"],[3,"MapKeySerializer"],[3,"CompactFormatter"],[3,"PrettyFormatter"],[3,"WriterFormatter"],[4,"State"],[3,"Serializer"],[3,"Deserializer"],[3,"VariantDeserializer"],[3,"SeqDeserializer"],[3,"MapDeserializer"],[4,"Version"],[4,"Id"],[4,"Params"],[3,"MethodCall"],[3,"Notification"],[4,"Call"],[4,"Request"],[3,"Success"],[3,"Failure"],[4,"Output"],[4,"Response"],[3,"Error"],[4,"ErrorCode"],[8,"MethodCommand"],[8,"NotificationCommand"],[3,"Commander"],[3,"RequestHandler"],[3,"IoDelegate"],[3,"IoHandler"]]};
initSearch(searchIndex);
