
import Recipe from "./components/Recipe"
const recipes = [
  {
    title: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhZ2hldHRpfGVufDB8fDB8fHww',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan cheese', 'Black pepper'],
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
  },
  {
    title: 'Chicken Curry',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Chicken', 'Onion', 'Tomatoes', 'Garlic', 'Ginger', 'Spices', 'Coconut milk'],
    description: 'A flavorful dish made with chicken simmered in a spiced coconut milk sauce.',
  },
  {
    title: 'Pancakes',
    image: 'https://images.unsplash.com/photo-1612182062966-c8fe45ecbf73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Flour', 'Eggs', 'Milk', 'Butter', 'Sugar', 'Baking powder', 'Salt'],
    description: 'Fluffy pancakes made from scratch, perfect for a weekend breakfast.',
  },
  {
    title: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
    description: 'A fresh salad with romaine lettuce, croutons, and a creamy Caesar dressing.',
  },
  {
    title: 'Beef Tacos',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZWYlMjB0YWNvc3xlbnwwfHwwfHx8MA%3D%3D',
    ingredients: ['Ground beef', 'Taco shells', 'Lettuce', 'Tomatoes', 'Cheese', 'Sour cream'],
    description: 'Tasty tacos filled with seasoned ground beef and your favorite toppings.',
  },
  {
    title: 'Vegetable Stir Fry',
    image: 'https://images.unsplash.com/photo-1543826173-cfe2ca17577d?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce', 'Garlic', 'Ginger'],
    description: 'A quick and healthy stir-fry made with fresh vegetables and a savory sauce.',
  },
  {
    title: 'Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    ingredients: ['Flour', 'Cocoa powder', 'Sugar', 'Eggs', 'Butter', 'Baking powder', 'Milk'],
    description: 'A rich and moist chocolate cake that is perfect for any occasion.',
  },
  {
    title: 'Tomato Soup',
    image: 'https://images.unsplash.com/photo-1608949621318-392aca2bede4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvbWF0byUyMHNvdXB8ZW58MHx8MHx8fDA%3D',
    ingredients: ['Tomatoes', 'Onion', 'Garlic', 'Basil', 'Vegetable broth', 'Olive oil'],
    description: 'A comforting soup made with ripe tomatoes and fresh basil.',
  },
  {
    title: 'Grilled Cheese Sandwich',
    image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JpbGxlZCUyMENoZWVzZSUyMFNhbmR3aWNofGVufDB8fDB8fHww',
    ingredients: ['Bread', 'Cheddar cheese', 'Butter'],
    description: 'A classic grilled cheese sandwich with crispy bread and melted cheese.',
  },
  {
    title: 'Shrimp Scampi',
    image: 'https://images.unsplash.com/photo-1658803136255-9c4b243dcc6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNocmltcCUyMFNjYW1wfGVufDB8fDB8fHww',
    ingredients: ['Shrimp', 'Garlic', 'Butter', 'Lemon', 'Parsley', 'White wine', 'Pasta'],
    description: 'A delicious seafood pasta dish with shrimp cooked in a garlic butter sauce.',
  },
  {
    title: 'Margarita Pizza',
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2FyaXRhJTIwUGl6emF8ZW58MHx8MHx8fDA%3D',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Basil'],
    description: 'A simple yet flavorful pizza topped with tomato sauce, mozzarella, and basil.',
  },
  {
    title: 'Fruit Salad',
    image: 'https://images.unsplash.com/photo-1588068403046-169c80c69938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D',
    ingredients: ['Strawberries', 'Blueberries', 'Kiwi', 'Bananas', 'Oranges'],
    description: 'A refreshing mix of fresh fruits, perfect for a healthy snack or dessert.',
  }
];

function App() {
 

  return (
    <>
        <div className="App">
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          title={recipe.title}
          image={recipe.image}
          ingredients={recipe.ingredients}
          description={recipe.description} // Assuming 'description' is meant to be 'instructions'
        />
      ))}
    </div>

      
      
    </>
  )
}

export default App
