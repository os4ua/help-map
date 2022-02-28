# Help-Map (Dopomoga)

Here we try to develop a tool that can help people to find whom to help if they have a chance to do that.

## Plan

### Front-end

Next.js application with bing maps

### Backend-end

Backend yet to be defined

### Database

Right now I am evaluating DynamoDB as a primary database to keep master data.

Here is what I have for now for DynamoDB:

Local instance start:
``` 
docker run -d -p 8000:8000 amazon/dynamodb-local
```

Create tables:
```
aws dynamodb create-table \
  --table-name Groups\
  --attribute-definitions \
    AttributeName=CoordinatorId,AttributeType=S \
    AttributeName=MemberId,AttributeType=S \
  --key-schema \
    AttributeName=CoordinatorId,KeyType=HASH \
    AttributeName=MemberId,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST \
  --endpoint-url http://localhost:8000

aws dynamodb create-table \
  --table-name HelpRequests \
  --attribute-definitions \
    AttributeName=CoordinatorId,AttributeType=S \
  --key-schema \
    AttributeName=CoordinatorId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --endpoint-url http://localhost:8000

aws dynamodb create-table \
  --table-name GroupCoordinators \
  --attribute-definitions \
    AttributeName=Id,AttributeType=S \
  --key-schema \
    AttributeName=Id,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --endpoint-url http://localhost:8000
```

TODO: Test design and prototype over this schema.

### Infrastructure

For now  the primary candidate for infrastructure is AWS.

# Слава Україні